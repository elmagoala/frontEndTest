var template = require('./tab-container.component.html');

function TabContainerController() {
    this.tabs = [];
    this.addTab = function(tab) {
        tab.active = false;
        if (this.tabs.length === 0)
            tab.active = true;
        this.tabs.push(tab);
    };

    this.selectTab = function(tab) {
        angular.forEach(this.tab, function(tab) {
            if (tab.active === true)
                tab.active = false;
        }, this);
    };
}

module.exports = {
    transclude: true,
    controller: TabContainerController,
    template: template
};