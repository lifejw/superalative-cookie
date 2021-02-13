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
    default: true,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: false,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: true,

    hideLearnMore: false,

    noticeAsModal: false,

    lang: 'en',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
		 zz: {
            privacyPolicyUrl: 'https://jonathanwerner.xyz/legal/privacy-policy',
        },
         en: {
            consentModal: {
			title: 'Consent Manager',
            privacyPolicyUrl: 'https://jonathanwerner.xyz/legal/privacy-policy',
                description:
                    'Here you can see and customize the information that gets collected about you.'
            },
            googleFonts: {
                description: 'Web fonts hosted by Google',
            },
			youtube: {
                description: 'Videos for the experience hosted on Googles YouTube Plattform',
            },
			vimeo: {
                description: 'Videos for the experience hosted on the Vimeo Plattform',
            },
			googleAnalytics: {
                description: 'Collecting of visitor statistics',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                advertising: 'Advertising',
                styling: 'Styling',
				experience: 'Experience',
				functional: 'Functional',
            },
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
        {
            name: 'googleAnalytics',
			title: 'Google Analytics',
            purposes: ['Analytics'],
			required: false,
			default: true,
			optOut: false,
        },
		{
            name: 'youtube',
			title: 'YouTube',
            purposes: ['experience'],
			required: true,
			optOut: false,
        },
		{
            name: 'vimeo',
			title: 'Vimeo',
            purposes: ['experience'],
			required: true,
			optOut: false,
        },
        {
            name: 'googleFonts',
            title: 'Google Fonts',
            purposes: ['functional'],
			required: true,
			optOut: false,
        },

    ],
};
