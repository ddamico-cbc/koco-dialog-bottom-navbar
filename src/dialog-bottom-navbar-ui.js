define(['text!./dialog-bottom-navbar.html'],
    function(template) {
        'use strict';

        var DialogBottomNavbar = function(params, componentInfo) {

            var self = this;

            self.closeLabel = params.closeLabel;
            self.saveLabel = params.saveLabel;
            self.saveIcon = params.saveIcon;
            
            // map size params to bootstrap classes
            self.sizeMap = {
                xs: 'btn-xs',
                sm: 'btn-sm',
                lg: 'btn-lg'
            }
            self.buttonSizeClass = !_.isUndefined(params.buttonSize) && !_.isUndefined(self.sizeMap[params.buttonSize]) ? self.sizeMap[params.buttonSize] : '';

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
