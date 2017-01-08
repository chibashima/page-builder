/**
 * 編集画面のModel
 */
define([], function() {
    class EditModel extends Backbone.Model {
        constructor(options) {
            super(Object.assign({
                title: 'title',
                menu: 'menu',
                content: 'content',
                footer: 'footer',
            }, options));
        }

        /**
         * サーバーに保存
         */
        saveEditData() {
            const data = JSON.stringify(this.attributes);
            $.ajax({
                url: 'http://localhost:3000/api/page',
                type: 'POST',
                data: {
                    user: 'miki',
                    page: 'hoge',
                    contents: data
                },
                success: function(data) {
                    console.log('suc');
                },
                error: function() {
                    console.log('err');
                }
            });
        }

        /**
         * サーバーから取得
         */
        getEditData() {
            $.ajax({
                url: 'http://localhost:3000/api/page',
                type: 'GET',
                data: {
                    user: 'miki',
                    page: 'hoge'
                },
                success: function(data) {
                    console.log('suc');
                    return data;
                },
                error: function() {
                    console.log('err');
                }
            });
        }
    }
    return EditModel;
})
