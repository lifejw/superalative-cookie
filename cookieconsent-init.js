// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    mode: 'opt-in',                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    force_consent: true,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    cookie_domain: 'jonathanwerner.xyz',       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    revision: 0,                            // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',               // box/cloud/bar
            position: 'bottom center',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            position: '',              // left/right
            transition: 'slide'            // zoom/slide
        }
    },

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'The site uses cookies, pixels and similar technologies (collectively referred to as "cookies" for the sake of simplicity), also from third parties, to offer existing services, to continuously improve them and to display personalized content on our website, social media and partner sites (see also our privacy policy). By clicking on "Accept all", you voluntarily consent to the aforementioned data processing. This also includes, for a limited period of time, your consent in accordance with Art. 49 para. 1 lit. a GDPR for data processing outside the EEA, e.g. in the USA. In these countries, despite careful selection and commitment of the service providers, the high European level of data protection cannot necessarily be guaranteed.',
                primary_btn: {
                    text: 'Accept All',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Choose Cookies',
                    role: 'settings'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie Settings',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept All',
                reject_all_btn: 'Reject All',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    { col1: 'Name' },
                    { col2: 'Domain' },
                    { col3: 'Expiration' },
                    { col4: 'Description' }
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'The site uses cookies, pixels and similar technologies (collectively referred to as "cookies" for the sake of simplicity), also from third parties, to offer existing services, to continuously improve them and to display personalized content on our website, social media and partner sites (see also our privacy policy). By clicking on "Accept all", you voluntarily consent to the aforementioned data processing. This also includes, for a limited period of time, your consent in accordance with Art. 49 para. 1 lit. a GDPR for data processing outside the EEA, e.g. in the USA. In these countries, despite careful selection and commitment of the service providers, the high European level of data protection cannot necessarily be guaranteed. <a href="https://jonathanwerner.xyz/legal/privacy-policy" class="cc-link">Privacy Policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Video Player',
                        description: 'These cookies allow the video player to work.',
                        toggle: {
                            value: 'vp',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                        ]
                    }, {
                        title: 'Performance, Analytics and Video Player cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past and allow the video player to open.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                        ]
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please contact me via: <a class="cc-link" href="mailto:privacy@jowerner.de">Privacy Mail</a>.',
                    }
                ]
            }
        }
    }
});