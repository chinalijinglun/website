const Controller = require('egg').Controller;
class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        // const dataList = {
        //     list: [
        //         { id: 1, title: 'this is news 1', url: '/news/1' },
        //         { id: 2, title: 'this is news 2', url: '/news/2' }
        //     ]
        // };
        const newsList = await ctx.service.news.list();
        await this.ctx.render('news/lists.tpl', newsList);
    }
}

module.exports = NewsController;