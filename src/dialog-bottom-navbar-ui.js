define(['text!./dialog-bottom-navbar.html'],
    function(template) {
        'use strict';

        var DialogBottomNavbar = function(params, componentInfo) {

            var self = this;

            self.closeLabel = params.closeLabel;
            self.saveLabel = params.saveLabel;
            self.saveIcon = params.saveIcon;

            self.save = params.save;
            self.close = params.close;

        };

        return {
            viewModel: {
                createViewModel: function(params, componentInfo) {
                    return new DialogBottomNavbar(params, componentInfo);
                }
            },
            template: template
        };
    });
