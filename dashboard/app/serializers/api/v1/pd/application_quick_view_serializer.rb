class Api::V1::Pd::ApplicationQuickViewSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :created_at,
    :applicant_name,
    :district_name,
    :school_name,
    :status,
    :locked,
    :notes,
    :regional_partner_id,
    :principal_approval_state,
    :total_score,
    :meets_criteria,
    :meets_scholarship_criteria
  )

  def locked
    object.locked?
  end

  def principal_approval_state
    object.try(:principal_approval_state)
  end

  def meets_criteria
    object.try(:meets_criteria)
  end

  def meets_scholarship_criteria
    object.try(:meets_scholarship_criteria)
  end
end
