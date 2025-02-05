import {pegasus} from '@cdo/apps/lib/util/urlHelpers';
import i18n from '@cdo/locale';

const CSFExpress = {
  title: i18n.csfExpressTitle(),
  description: i18n.csfExpressDesc(),
  link: "/s/express",
  image: "csf-express",
  buttonText: i18n.csfButton()
};

const CSFAccelerated = {
  title: i18n.csfAcceleratedTitle(),
  description: i18n.csfAcceleratedDesc(),
  link: "/s/20-hour",
  image: "csf-express",
  buttonText: i18n.csfButton()
};

const CourseCatalog = {
  title: i18n.courseCatalogTitle(),
  description: i18n.courseCatalogDescription(),
  link: "/courses",
  image: "course-catalog",
  buttonText: i18n.courseCatalogButton()
};

const CreateAccount = {
  title: i18n.createAccount(),
  description: i18n.createAccountDesc(),
  link: "/users/sign_up",
  image: "create-account",
  buttonText: i18n.createAccount()
};

const CreateAccountApplab = {
  title: i18n.createAccount(),
  description: i18n.createAccountApplabDesc(),
  link: "/users/sign_up",
  image: "create-account",
  buttonText: i18n.createAccount()
};

const AnotherHoC = {
  title: i18n.anotherHoCTitle(),
  description: i18n.anotherHoCDesc(),
  link: pegasus('/hourofcode/overview'),
  image: "another-hoc",
  buttonText: i18n.anotherHoCButton()
};

const ApplabTutorial = {
  title: i18n.applabTutorialTitle(),
  description: i18n.applabTutorialDesc(),
  link: "/s/applab-intro/reset",
  image: "applab-tutorial",
  buttonText: i18n.applabTutorialButton()
};

const ApplabMarketing = {
  title: i18n.applabMarketingTitle(),
  description: i18n.applabMarketingDesc(),
  link: pegasus('/applab'),
  image: "applab-marketing",
  buttonText: i18n.applabMarketingButton()
};

const ApplabProject = {
  title: i18n.applabProjectTitle(),
  description: i18n.applabProjectDesc(),
  link: "/projects/applab/new",
  image: "applab-project",
  buttonText: i18n.applabProjectButton()
};

const OldMinecraft = {
  title: i18n.pre2017MinecraftTitle(),
  description: i18n.pre2017MinecraftDesc(),
  link: "https://education.minecraft.net/hour-of-code",
  image: "old-minecraft",
  buttonText: i18n.pre2017MinecraftButton()
};

const HeroMinecraft = {
  title: i18n.minecraft2017Title(),
  description: i18n.minecraft2017Desc(),
  link: "https://education.minecraft.net/hour-of-code",
  image: "hero-minecraft",
  buttonText: i18n.minecraft2017Button(),
  MCShareLink: ""
};

const AquaticMinecraft = {
  title: i18n.minecraftAquaticTitle(),
  description: i18n.minecraftAquaticDesc(),
  link: "http://aka.ms/hoc2018",
  image: "aquatic-minecraft",
  buttonText: i18n.minecraftAquaticButton(),
};

const MinecraftMarketing = {
  title: i18n.minecraftMarketingTitle(),
  description: i18n.minecraftMarketingDesc(),
  link: pegasus('/minecraft'),
  image: "minecraft-marketing",
  buttonText: i18n.minecraftMarketingButton(),
};

const DancePartyFollowUp = {
  title: i18n.dancePartyTitle(),
  description: i18n.dancePartyDesc(),
  link: "/s/dance-extras",
  image: "dance-party",
  buttonText: i18n.dancePartyButton(),
};

export const cardSets = {
  'pre2017MinecraftCards' : [
    CSFExpress,
    ApplabTutorial,
    OldMinecraft
  ],
  'youngerThan13Pre2017MinecraftCards' : [
    CSFExpress,
    AnotherHoC,
    OldMinecraft
  ],
  'nonEnglishPre2017MinecraftCards' : [
    CSFAccelerated,
    CourseCatalog,
    OldMinecraft
  ],
  'heroMinecraftCards' : [
    CSFExpress,
    ApplabTutorial,
    HeroMinecraft
  ],
  'youngerThan13HeroMinecraftCards' : [
    CSFExpress,
    AnotherHoC,
    HeroMinecraft
  ],
  'nonEnglishHeroMinecraftCards' : [
    CSFAccelerated,
    CourseCatalog,
    HeroMinecraft
  ],
  'aquaticMinecraftCards' : [
    CSFExpress,
    ApplabTutorial,
    AquaticMinecraft
  ],
  'youngerThan13AquaticMinecraftCards' : [
    CSFExpress,
    AnotherHoC,
    AquaticMinecraft
  ],
  'nonEnglishAquaticMinecraftCards' : [
    CSFAccelerated,
    CourseCatalog,
    AquaticMinecraft
  ],
  'signedInApplabCards' : [
    ApplabProject,
    ApplabMarketing,
    AnotherHoC
  ],
  'signedOutApplabCards' : [
    ApplabMarketing,
    CreateAccountApplab,
    ApplabProject
  ],
  'signedInDefaultCards' : [
    CSFExpress,
    ApplabTutorial,
    AnotherHoC
  ],
  'youngerThan13DefaultCards' : [
    CSFExpress,
    MinecraftMarketing,
    AnotherHoC
  ],
  'signedInNonEnglishDefaultCards' : [
    CSFAccelerated,
    CourseCatalog,
    AnotherHoC
  ],
  'signedOutDefaultCards' : [
    CSFExpress,
    ApplabTutorial,
    CreateAccount
  ],
  'signedOutNonEnglishDefaultCards' : [
    CSFAccelerated,
    CourseCatalog,
    CreateAccount
  ],
  'signedInEnglishDancePartyCards' : [
    DancePartyFollowUp,
    CSFExpress,
    AnotherHoC
  ],
  'signedInNonEnglishDancePartyCards' : [
    DancePartyFollowUp,
    CSFAccelerated,
    AnotherHoC
  ],
  'signedOutEnglishDancePartyCards' : [
    DancePartyFollowUp,
    CSFExpress,
    CreateAccount
  ],
  'signedOutNonEnglishDancePartyCards' : [
    DancePartyFollowUp,
    CSFAccelerated,
    CreateAccount
  ],
};
