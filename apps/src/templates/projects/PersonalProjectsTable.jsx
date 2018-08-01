import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import i18n from "@cdo/locale";
import color from "../../util/color";
import FontAwesome from '@cdo/apps/templates/FontAwesome';
import {ImageWithStatus} from '../ImageWithStatus';
import {Table, sort} from 'reactabular';
import wrappedSortable from '../tables/wrapped_sortable';
import orderBy from 'lodash/orderBy';
import {
  personalProjectDataPropType,
  FEATURED_PROJECT_TYPE_MAP,
} from './projectConstants';
import {tableLayoutStyles, sortableOptions} from "../tables/tableConstants";
import PersonalProjectsTableActionsCell from './PersonalProjectsTableActionsCell';
import PersonalProjectsNameCell from './PersonalProjectsNameCell';
const PROJECT_DEFAULT_IMAGE = '/blockly/media/projects/project_default.png';

const THUMBNAIL_SIZE = 65;

/** @enum {number} */
export const COLUMNS = {
  THUMBNAIL: 0,
  PROJECT_NAME: 1,
  APP_TYPE: 2,
  LAST_PUBLISHED: 3,
  LAST_FEATURED: 4,
  ACTIONS: 5,
};

export const styles = {
  cellFirst: {
    borderWidth: '1px 0px 1px 1px',
    borderColor: color.border_light_gray,
  },
  headerCellFirst: {
    borderWidth: '0px 0px 1px 0px',
    borderColor: color.border_light_gray,
  },
  cellThumbnail: {
    width: THUMBNAIL_SIZE,
    minWidth: THUMBNAIL_SIZE,
    padding: 2
  },
  headerCellThumbnail: {
    padding: 0
  },
  cellName: {
    borderWidth: '1px 1px 1px 0px',
    borderColor: color.border_light_gray,
    padding: 15,
    width: 250
  },
  headerCellName: {
    borderWidth: '0px 1px 1px 0px',
    borderColor: color.border_light_gray,
    padding: 15
  },
  cellType: {
    width: 120
  },
  centeredCell: {
    textAlign: 'center'
  },
  thumbnailWrapper: {
    height: THUMBNAIL_SIZE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// Cell formatters.
const thumbnailFormatter = function (thumbnailUrl, {rowData}) {
  const projectUrl = `/projects/${rowData.type}/${rowData.channel}/`;
  thumbnailUrl = thumbnailUrl || PROJECT_DEFAULT_IMAGE;
  return (
    <a style={tableLayoutStyles.link} href={projectUrl} target="_blank">
      <ImageWithStatus
        src={thumbnailUrl}
        width={THUMBNAIL_SIZE}
        wrapperStyle={styles.thumbnailWrapper}
      />
    </a>
  );
};

const nameFormatter = (projectName, {rowData}) => {
  return (
    <PersonalProjectsNameCell
      id={rowData.id}
      projectId={rowData.channel}
      projectType={rowData.type}
      projectName={projectName}
      isEditing={rowData.isEditing}
      updatedName={rowData.updatedName}
    />
  );
};

const actionsFormatter = (actions, {rowData}) => {
  return (
    <PersonalProjectsTableActionsCell
      isPublished={!!rowData.publishedAt}
      projectId={rowData.channel}
      projectType={rowData.type}
      isEditing={rowData.isEditing}
      updatedName={rowData.updatedName}
    />
  );
};

const typeFormatter = (type) => {
  return FEATURED_PROJECT_TYPE_MAP[type];
};

const dateFormatter = function (time) {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const publishedAtFormatter = (publishedAt) => {
  return publishedAt ? (<FontAwesome icon="circle"/>) : '';
};

class PersonalProjectsTable extends React.Component {
  static propTypes = {
    personalProjectsList: PropTypes.arrayOf(personalProjectDataPropType).isRequired,
  };

  state = {
    [COLUMNS.PROJECT_NAME]: {
      direction: 'desc',
      position: 0
    }
  };

  getSortingColumns = () => {
    return this.state.sortingColumns || {};
  };

  // The user requested a new sorting column. Adjust the state accordingly.
  onSort = (selectedColumn) => {
    this.setState({
      sortingColumns: sort.byColumn({
        sortingColumns: this.state.sortingColumns,
        // Custom sortingOrder removes 'no-sort' from the cycle
        sortingOrder: {
          FIRST: 'asc',
          asc: 'desc',
          desc: 'asc'
        },
        selectedColumn
      })
    });
  };

  getColumns = (sortable) => {
    const dataColumns = [
      {
        property: 'thumbnailUrl',
        header: {
          props: {style: {
            ...tableLayoutStyles.headerCell,
            ...styles.headerCellFirst,
            ...styles.headerCellThumbnail,
            ...tableLayoutStyles.unsortableHeader,
          }},
        },
        cell: {
          format: thumbnailFormatter,
          props: {style: {
            ...tableLayoutStyles.cell,
            ...styles.cellFirst,
            ...styles.cellThumbnail
          }}
        }
      },
      {
        property: 'name',
        header: {
          label: i18n.projectName(),
          props: {style: {
            ...tableLayoutStyles.headerCell,
            ...styles.headerCellName,
          }},
        },
        cell: {
          format: nameFormatter,
          props: {style: {
            ...tableLayoutStyles.cell,
            ...styles.cellName
          }}
        }
      },
      {
        property: 'type',
        header: {
          label: i18n.projectType(),
          props: {style: tableLayoutStyles.headerCell},
          transforms: [sortable],
        },
        cell: {
          format: typeFormatter,
          props: {style: {
            ...styles.cellType,
            ...tableLayoutStyles.cell
          }}
        }
      },
      {
        property: 'updatedAt',
        header: {
          label: i18n.lastEdited(),
          props: {style: tableLayoutStyles.headerCell},
          transforms: [sortable],
        },
        cell: {
          format: dateFormatter,
          props: {style: tableLayoutStyles.cell}
        }
      },
      {
        property: 'publishedAt',
        header: {
          label: i18n.published(),
          props: {style: tableLayoutStyles.headerCell},
          transforms: [sortable],
        },
        cell: {
          format: publishedAtFormatter,
          props: {style: {
            ...tableLayoutStyles.cell,
            ...styles.centeredCell
          }}
        }
      },
      {
        property: 'actions',
        header: {
          label: i18n.quickActions(),
          props: {
            style: {
              ...tableLayoutStyles.headerCell,
              ...tableLayoutStyles.unsortableHeader,
            }
          },
        },
        cell: {
          format: actionsFormatter,
          props: {style: {
            ...tableLayoutStyles.cell,
            ...styles.centeredCell
          }}
        }
      }
    ];
    return dataColumns;
  };

  render() {
    // Define a sorting transform that can be applied to each column
    const sortable = wrappedSortable(this.getSortingColumns, this.onSort, sortableOptions);
    const columns = this.getColumns(sortable);
    const sortingColumns = this.getSortingColumns();

    const sortedRows = sort.sorter({
      columns,
      sortingColumns,
      sort: orderBy,
    })(this.props.personalProjectsList);

    const noProjects = this.props.personalProjectsList.length === 0;

    return (
      <div>
        {!noProjects &&
          <Table.Provider
            columns={columns}
            style={tableLayoutStyles.table}
          >
            <Table.Header />
            <Table.Body rows={sortedRows} rowKey="channel" />
          </Table.Provider>
        }
        {noProjects &&
          <h3>{i18n.noPersonalProjects()}</h3>
        }
      </div>
    );
  }
}

export const UnconnectedPersonalProjectsTable = PersonalProjectsTable;

export default connect(state => ({
  personalProjectsList: state.projects.personalProjectsList.projects,
}))(PersonalProjectsTable);
