var template = require('./tab.component.html');

function TabController() {
    this.$onInit = function() {
        this.tabContainerController.addTab(this);
    }
}

module.exports = {
    transclude: true,
    require: {
        tabContainerController: '^tabContainer'
    },
    bindings: {
        title: '=',
        badge: '='
    },
    controller: TabController,
    template: template
};