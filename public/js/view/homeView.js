/**
 * ホーム（ログイン）画面のView
 */
define([], function() {
    const homeViewTemplate = _.template('<div class="btn-create">CREATE</div><div class="btn-edit">EDIT</div>');

    class HomeView extends Backbone.View {
        constructor() {
            super(Object.assign({
                className: 'home-view-contents'
            }))
        }
        render() {
            this.$el.html(homeViewTemplate());
            return this;
        }
    }
    return HomeView;
})
