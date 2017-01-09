/**
 * 編集ページのView
 */
define([
    'model/editModel'
], function() {
    const EditModel = require('model/editModel');
    // 編集画面のヘッダー
    const editViewHeaderTemplate = _.template(
        '<div class="edit-view-header">' +
            '<div class="edit-view-header-title">title</div>' +
            '<div class="edit-view-header-menu">menu</div>' +
            '<div class="edit-view-header-save">保存</div>' +
        '</div>'
    );
    // 編集画面の左メニュー
    const editViewMenuTemplate = _.template(
        '<div class="edit-view-menu">' +
            '<div class="edit-view-menu-item">背景</div>' +
            '<div class="edit-view-menu-item">パーツ</div>' +
            '<div class="edit-view-menu-item">文字</div>' +
        '</div>'
    );

    class EditView extends Backbone.View {
        constructor() {
            super(Object.assign({
                tagName: 'div',
                className: 'edit-view-contents',
                events: {
                    'click .edit-view-header-save': 'saveEditData'
                }
            }));
        }

        render() {
            this.$el.empty().append(editViewHeaderTemplate()).append(editViewMenuTemplate());
            this.getEditData();
            return this;
        }

        /**
         * 編集用のデータを取得
         */
        getEditData() {
            this.model = new EditModel();
            const editData = this.model.getEditData();
            if (editData) {
                this.model.set(editData);
            }
            this.setEditDataToTemplate();
            // return data;
        }

        /**
         * 編集した画面を保存
         */
        saveEditData() {
            const options = {
                title: this.$('.edit-title').html(),
                menu: this.$('.edit-menu').html(),
                content: this.$('.edit-content').html(),
                footer: this.$('.edit-footer').html(),
            }
            this.model = new EditModel(options);
            this.model.saveEditData();

            // console.log(JSON.stringify(this.model));
        }

        /**
         * サーバーから取得したデータをテンプレートにセット
         */
        setEditDataToTemplate() {
            const title = this.model.get('title');
            const menu = this.model.get('menu');
            const content = this.model.get('content');
            const footer = this.model.get('footer');
            // 編集画面のコンテンツ
            const editViewContentsTemplate =
                `<div class="edit-view-contents-inner">
                    <div class="edit-view-contents-item edit-title">
                        <textarea name="editor1">${title}</textarea>
                    </div>
                    <div class="edit-view-contents-item edit-menu">
                        <textarea name="editor2">${menu}</textarea>
                    </div>
                    <div class="edit-view-contents-item edit-content">
                        <textarea name="editor3">${content}</textarea>
                    </div>
                    <div class="edit-view-contents-item edit-footer">
                        <textarea name="editor4">${footer}</textarea>
                    </div>
                </div>`;
            this.$el.append(editViewContentsTemplate);
        }
    }
    return EditView;
})
