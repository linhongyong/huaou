<template>
    <div>
        <Table :columns="columns" :data="menuList"></Table>
    </div>
</template>
<script>
    import tableExpand from './table-expand'
    export default {
        name: 'subMenu',
        props: {
            row: Object,
        },
        data() {
            return {
                menuList: [],
                columns: [
                    {
                        type: "expand",
                        width: 50,
                        render: (h, params) => {
                            return h(tableExpand, {
                                props: {
                                    row: params.row
                                },
                                on: {
                                    'add-menu': (menu) => {
                                        this.$emit('add-menu', menu);
                                    },
                                    'edit-menu': (menu) => {
                                        this.$emit('edit-menu', menu);
                                    },
                                    'delete-menu': (menu) => {
                                        this.$emit('delete-menu', menu);
                                    },

                                }
                            });
                        }
                    },
                    {
                        title: "菜单名称",
                        key: "menuName"
                    },
                    {
                        title: "权限标识",
                        key: "perms"
                    },
                    {
                        title: "资源url",
                        key: "url"
                    },
                    {
                        title: "类型 0菜单 /1按钮",
                        key: "type"
                    },
                    {
                        title: "排序",
                        key: "orderNum"
                    },
                    {
                        title: "Action",
                        key: "action",
                        width: 180,
                        render: (h, params) => {
                            return h("div", [
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "success",
                                            size: "small"
                                        },
                                        on: {
                                            click: e => {
                                                this.$emit('edit-menu', params.row)
                                            }
                                        },
                                        style: {
                                            marginRight: "5px"
                                        }
                                    },
                                    "修改"
                                ),
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "success",
                                            size: "small"
                                        },
                                        on: {
                                            click: e => {
                                                this.$emit('add-menu', params.row)
                                            }
                                        },
                                        style: {
                                            marginRight: "5px"
                                        }
                                    },
                                    "新增"
                                ),
                                h(
                                    "Poptip",
                                    {
                                        props: {
                                            confirm: true,
                                            title: "你确定要删除吗?"
                                        },
                                        on: {
                                            "on-ok": () => {
                                                this.$emit('delete-menu', params.row)
                                            }
                                        }
                                    },
                                    [
                                        h(
                                            "Button",
                                            {
                                                props: {
                                                    type: "error",
                                                    size: "small"
                                                }
                                            },
                                            "删除"
                                        )
                                    ]
                                )
                            ]);
                        }
                    }
                ],
            }
        },
        created() {
            this.menuList = this.row.childMenus;
        },
    }
</script>