<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>购物商场</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>

        <div>
            <el-button size="mini" plain icon="el-icon-plus">新增</el-button>
            <el-button size="mini" plain icon="el-icon-check">全选</el-button>
            <el-button size="mini" plain icon="el-icon-edit">删除</el-button>
            <el-input placeholder="请输入内容" size="mini" style="width:200px;float:right" prefix-icon="el-icon-search" v-model="gsListQuery.searchvalue"
                @blur="getGoodsList">
            </el-input>
        </div>



        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">

            <el-table-column type="selection" width="55">
            </el-table-column>

            <el-table-column label="标题">
                <template slot-scope="scope">
                    <el-tooltip class="item" effect="light" placement="right">
                        <div slot="content">
                            <img :src="scope.row.imgurl" alt="商品预览" style="width:200px">
                        </div>
                        <router-link :to="{name:'goodsCtEdit', params:{id:scope.row.id}}">{{ scope.row.title }}</router-link>
                    </el-tooltip>

                </template>
            </el-table-column>

            <el-table-column prop="categoryname" label="所属类别" width="120">
            </el-table-column>

            <el-table-column prop="stock_quantity" label="库存" width="120">
            </el-table-column>
            <el-table-column prop="market_price" label="市场价" width="120">
            </el-table-column>
            <el-table-column prop="sell_price" label="销售价" width="120">
            </el-table-column>

            <el-table-column label="属性" width="120">
                <template slot-scope="scope">
                    <i :class="['el-icon-picture' , scope.row.is_slide==1?'active':'']" @click="changeStatus(scope.row.id,'is_slide',scope.row.is_slide==1?false:true)"></i>
                    <i :class="['el-icon-upload' , scope.row.is_top==1?'active':'']" @click="changeStatus(scope.row.id,'is_top',scope.row.is_top==1?false:true)"></i>
                    <i :class="['el-icon-star-on' , scope.row.is_hot==1?'active':'']" @click="changeStatus(scope.row.id,'is_hot',scope.row.is_hot==1?false:true)"></i>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="120">
                <template slot-scope="scope">
                    <router-link :to="{name:'goodsCtEdit', params:{id:scope.row.id}}">操作</router-link>
                </template>
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="gsListQuery.pageIndex" :page-sizes="page.pageSizes"
                :page-size="gsListQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="page.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData3: [],
                multipleSelection: [],
                gsListQuery: {
                    pageIndex: 1,
                    pageSize: 10,
                    searchvalue: ''
                },
                page:{
                    pageSizes:[10,20,30,40],
                    total:100
                }
            }
        },

        methods: {
            getGoodsList() {
                this.$http.get(this.$api.gsList, { params: this.gsListQuery })
                    .then(res => {
                        this.page.total = res.data.totalcount;
                        this.tableData3 = res.data.message
                    })
            },
            changeStatus(id, type, newStatus) {
                this.tableData3.filter(res => res.id == id)[0][type] = newStatus == 1 ? 1 : 0;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.gsListQuery.pageSize = val;
                this.getGoodsList();
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.gsListQuery.pageIndex = val;
                this.getGoodsList();
            }
        },

        created() {
            this.getGoodsList();
        }
    }
</script>


<style scoped lang="less">
    [class^=el-icon] {
        color: rgba(0, 0, 0, 0.4);
        &.active {
            color: #000;
        }
    }
</style>