const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot81644/",
            name: "springboot81644",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot81644/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "校园疫情防控系统"
        } 
    }
}
export default base
