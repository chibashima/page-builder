/**
 * 閲覧画面のView
 */
define([], function() {
    class PageView extends Backbone.View {
        constructor() {
            super(Object.assign({
                divName: 'div',
                className: 'page-view-contents'
            }));
        }

        render() {
            return this;
        }

        renderPageHeader() {
            const editViewHeaderTemplate = `<header><h1>${title}</h1></header>`;
            this.$el.append(editViewHeaderTemplate({
                title: this.model.get('title')
            }));
        }

        renderPageMenu() {
            const $nav = $('<nav>');
            const editViewMenuTemplate = `<div class="menu-item">${menu}</div>`;
            for (let item of this.model.get('menu')) {
                $nav.append(editViewMenuTemplate({
                    menu: item
                }));
            }
            this.$el.append($nav);
        }

        renderPageContents() {
            const $article = $('<article>');
            const editViewContentsTemplate = `<div>${content}</div>`;
            for (let content of this.model.get('contents')) {
                $article.append(editViewContentsTemplate({
                    content: item
                }));
            }
            this.$el.append($article);
        }

        renderPageFooter() {
            const editViewFooterTemplate = `<footer><div>${footer}</div></footer>`;
            this.$el.append(editViewFooterTemplate({
                footer: this.model.get('footer')
            }))
        }

    }
    return PageView;
})
