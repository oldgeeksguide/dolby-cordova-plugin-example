// MOCK dolby plugin object
// used for testing/debugging when dolby plugin or hardware is not present.
dolby = {
    mock: {
        isEnabled: false,
        working: true,
        currentProfile: "GAME"
    },
    DapProfile: {GAME: "GAME", MUSIC: "MUSIC", VOICE: "VOICE", MOVIE: "MOVIE"},
    dap: {
        setProfile: function(profile) {
            dolby.mock.currentProfile = profile;
        },
        initialize: function(profile, success, fail) {
            dolby.dap.setProfile(profile);
            if (dolby.mock.working) {
                success();
            } else {
                fail("pretend it's not working");
            }
        },
        isEnabled: function(success, err) {
            if (!dolby.mock.working) {
                err();
            } else {
                success(dolby.mock.isEnabled);
            }
        },
        setEnabled: function(val) {
            dolby.mock.isEnabled = val;
        }
    }
};
