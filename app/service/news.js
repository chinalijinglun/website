const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        // read config
        const { serverUrl, pageSize } = this.config.news;

        // use build-in http client to GET hacker-news api
        // const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
        //     data: {
        //         orderBy: '"$key"',
        //         startAt: `"${pageSize * (page - 1)}"`,
        //         endAt: `"${pageSize * page - 1}"`,
        //     },
        //     dataType: 'json',
        // });

        // parallel GET detail
        // const newsList = await Promise.all(
        //     Object.keys(idList).map(key => {
        //         console.log(idList)
        //         const url = `${serverUrl}/item/${idList[key]}.json`;
        //         return this.ctx.curl(url, { dataType: 'json' });
        //     })
        // );
        // return newsList.map(res => res.data);

        // 
        const { data: idList } = await this.ctx.curl(`http://api.jirengu.com/getWeather.php?city=%E5%8C%97%E4%BA%AC`, {
            dataType: 'json',
        });

        return idList
    }
}

module.exports = NewsService;