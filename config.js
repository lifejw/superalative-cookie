var klaroConfig = {
    // With the 0.7.0 release we introduce a 'version' paramter that will make
    // if easier for us to keep configuration files backwards-compatible in the future.
    version: 1,
	/*
    Die Einstellung von "testing" auf "true" bewirkt, dass Klaro die
    Einverständniserklärung oder modal standardmäßig nicht anzeigt, außer wenn ein
    spezieller Hash-Tag an die URL angehängt ist (#klaro-testing). Dadurch ist es
    möglich, Klaro auf Ihrer Live-Website zu testen, ohne normale Besucher zu
    beeinträchtigen.
    */
    testing: true,

    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // Setting this to true will keep Klaro from automatically loading itself
    // when the page is being loaded.
    noAutoLoad: false,

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,

    // You can group services by their purpose in the modal. This is advisable
    // if you have a large number of services. Users can then enable or disable
    // entire groups of services instead of having to enable or disable every service.
    groupByPurpose: true,

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 120,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    cookieDomain: 'jonathanwerner.xyz',

    // Defines the default state for services (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: false,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // hide "learnMore" link
    hideLearnMore: false,

    // show cookie notice as modal
    noticeAsModal: false,

    // You can also remove the 'Realized with Klaro!' text in the consent modal.
    // Please don't do this! We provide Klaro as a free open source tool.
    // Placing a link to our website helps us spread the word about it,
    // which ultimately enables us to make Klaro! better for everyone.
    // So please be fair and keep the link enabled. Thanks :)
    //disablePoweredBy: true,

    // you can specify an additional class (or classes) that will be added to the Klaro `div`
    //additionalClass: 'my-klaro',

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'en',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        // translationsed defined under the 'zz' language code act as default
        // translations.
        zz: {
            privacyPolicyUrl: 'https://jonathanwerner.xyz/legal/privacy-policy',
        },
        // If you erase the "consentModal" translations, Klaro will use the
        // bundled translations.
        en: {
            consentModal: {
            privacyPolicyUrl: 'https://jonathanwerner.xyz/legal/privacy-policy',
                description:
                    'Here you can see and customize the information that we collect about you.',
            },
            googleFonts: {
                description: 'Web fonts hosted by Google',
            },
			YouTube: {
                description: 'Videos for the experience hosted on Googles YouTube Plattform',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                advertising: 'Advertising',
                styling: 'Styling',
				experience: 'Experience',
            },
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
        {
            name: 'youtube',
			title: 'YouTube',
            purposes: ['experience'],
            default: true,
			required: true,
        },
        {
            name: 'googleFonts',
            title: 'Google Fonts',
            purposes: ['styling'],
			default: true,
			required: true,
        },

    ],
};
