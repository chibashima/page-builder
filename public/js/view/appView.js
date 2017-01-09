/**
 * アプリ全体のView
 */
define([
    'view/homeView',
    'view/editView',
    'view/pageView'
], function(){
    const HomeView = require('view/homeView');
    const EditView = require('view/editView');
    const PageView = require('view/pageView');

    class AppView extends Backbone.View {
        constructor() {
            super(Object.assign({
                tagName: 'div',
                className: 'app-view-contents',
                events: {
                    'click .btn-edit': 'renderEditPage',
                    'click .btn-create': 'renderCreatePage',
                    'click textarea': 'activeTextarea'
                }
            }));
        }

        /**
         * ホーム画面を描画
         */
        render() {
            this.$el.html(new HomeView().render().$el);
            return this;
        }

        /**
         * 新規作成画面を描画
         */
        renderCreatePage() {
            this.editView = new EditView();
            this.$el.html(this.editView.render().$el);
        }

        /**
         * 編集画面を描画
         */
        renderEditPage() {
            this.editView = new EditView();
            this.$el.html(this.editView.render().$el);
            $('.edit-content').sortable();
            $('.edit-view-menu-item').draggable({
                cursor: 'move',
                helper: 'clone',
                containment: 'body',
                appendTo: '.edit-content',
                connectToSortable: '.edit-content'
            });
        }

        /**
         * ページを描画
         */
        renderPage() {
            this.pageView = new PageView();
            this.$el.html(this.pageView.render().$el);
        }

        activeTextarea(event) {
            const target = $(event.currentTarget).attr('name');
            CKEDITOR.replace(target);
        }
    }
    return AppView;
});
