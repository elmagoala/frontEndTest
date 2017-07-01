var template = require('./book-detail.component.html');

function BookDetailController() {
    this.selectedTab = 1;

    this.selectTab = function(tab) {
        this.selectedTab = tab;
    }

    this.isSelected = function(tab) {
        return this.selectedTab === tab;
    }
}

module.exports = {
    bindings: {
        book: '='
    },
    controller: BookDetailController,
    template: template
};