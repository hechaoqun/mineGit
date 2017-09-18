module.exports = function () {

    var testBaseSourceUrl = "//testzs.huihui.cn/test/"; //测试资源文件目录
    var testBaseUrl = "//zhushou.huihui.cn/"; //测试数据地址
    var localBaseUrl = "//zhushou.huihui.cn/"; //本地数据地址

    return  {
        "options": {
            "config": {
                "version": "<%= pkg.version %>",
                "banner": "hui-hui gouwuzhushou package @ <%= grunt.template.today('dd-mm-yyyy')%>"
            },

            "script": {
                "input": "./src/app/config.js",
                "output": "./dist/script/<%= pkg.name %>_<%= pkg._version %>_origin.js",
                "output_ext": "./dist/script/ext/<%= pkg.name %>_<%= pkg._version %>_origin_ext.js"
            },
            "css": {
                "input": "./src/css/combo.less",
                "output": "./dist/css/<%= pkg.name %>_<%= pkg._version %>.css",
                "output_s": "./dist/css/<%= pkg.name %>_<%= pkg._version %>_s.css",
                "output_chrome": "./dist/css/ext/<%= pkg.name %>_<%= pkg._version %>_chrome.css",
                "output_sogou": "./dist/css/ext/<%= pkg.name %>_<%= pkg._version %>_sogou.css",
                "output_firefox": "./dist/css/ext/<%= pkg.name %>_<%= pkg._version %>_firefox.css",
                "output_safari": "./dist/css/ext/<%= pkg.name %>_<%= pkg._version %>_safari.css"
            },
            "imgDir": {
                "input": "./src/images/",
                "output": "./dist/images/<%= pkg.name %>_<%= pkg._version %>/"
            }

        },
        "test": {
            "subType": "",
            "combo": true,
            "protocol":"http:",
            "baseURL": testBaseUrl,
            "cssURL": "http:" + testBaseSourceUrl + "css/<%= pkg.name %>_<%= pkg._version %>.css?version=<%= pkg.version %>&buildday=<%= grunt.template.today('dd_mm_yyyy_hh_MM') %>",
            "cssURLS": "https:" + testBaseSourceUrl + "css/<%= pkg.name %>_<%= pkg._version %>_s.css?version=<%= pkg.version %>&buildday=<%= grunt.template.today('dd_mm_yyyy_hh_MM') %>",
            "imgPath": testBaseSourceUrl + "images/<%= pkg.name %>_<%= pkg._version %>/",
            "imgPathS": testBaseSourceUrl + "images/<%= pkg.name %>_<%= pkg._version %>/",
            "cssVersion":"<%= grunt.template.today('yyyymmddhhMM') %>",
            "jsFanyiPath": testBaseSourceUrl + "script/all-packed-utf-8-huihui.js",
            "logHiwifi":"",
            "cacheHiwifi":"",
            "requestHiwifi":""
        },
        "online": {
            "subType": "",
            "combo": true,
            "protocol":"http:",
            "baseURL": "//zhushou.huihui.cn/",
            "cssURL": "http://shared.ydstatic.com/gouwuex/ext/css/<%= pkg.name %>_<%= pkg._version %>.css?version=<%= pkg.version %>&buildday=<%= grunt.template.today('dd_mm_yyyy_hh_MM') %>",
            "cssURLS": "https://shared-https.ydstatic.com/gouwuex/ext/css/<%= pkg.name %>_<%= pkg._version %>_s.css?version=<%= pkg.version %>&buildday=<%= grunt.template.today('dd_mm_yyyy_hh_MM') %>",
            "imgPath": "//shared.ydstatic.com/gouwuex/images/extension_<%= pkg._version %>/",
            "imgPathS": "//shared-https.ydstatic.com/gouwuex/images/extension_<%= pkg._version %>/",
            "cssVersion":"<%= grunt.template.today('yyyymmddhhMM') %>",
            "imgPathChrome": "chrome-extension://__MSG_@@extension_id__/images/extension_<%= pkg._version %>/",
            "imgPathSogou": "@@seext@@//images/extension_<%= pkg._version %>/",
            "imgPathFirefox": "../images/extension_<%= pkg._version %>/",
            "imgPathSafari": "../images/extension_<%= pkg._version %>/",
            "jsFanyiPath": "//shared.ydstatic.com/gouwuex/ext/script/all-packed-utf-8-huihui.js",
            "logHiwifi":"",
            "cacheHiwifi":"",
            "requestHiwifi":""
        },
        "locate": {
            "subType": "",
            "combo": true,
            "protocol":"http:",
            "baseURL": localBaseUrl,
            "cssURL": "http://127.0.0.1:8000/dist/css/<%= pkg.name %>_<%= pkg._version %>.css?version=<%= pkg.version %>&buildday=<%= grunt.template.today('dd_mm_yyyy_HH_mm_ss') %>",
            "cssURLS": "https://huihui/dist/css/<%= pkg.name %>_<%= pkg._version %>_s.css?version=<%= pkg.version %>&buildday=<%= grunt.template.today('dd_mm_yyyy_HH_mm_ss') %>",
            "imgPath": "//huihui/dist/images/<%= pkg.name %>_<%= pkg._version %>/",
            "imgPathS": "//huihui/dist/images/<%= pkg.name %>_<%= pkg._version %>/",
            "cssVersion":"<%= grunt.template.today('yyyymmddhhMM') %>",
            "jsFanyiPath": "//127.0.0.1:8000/local_tasks/lib/all-packed-utf-8-test.js",
            "logHiwifi":"",
            "cacheHiwifi":"",
            "requestHiwifi":""
        },
        "hiwifi": {
            "subType": "",
            "combo": true,
            "protocol":"http:",
            "baseURL": "//zhushou.huihui.cn/",
            "cssURL": "http://shared.ydstatic.com/gouwuex/ext/css/<%= pkg.name %>_<%= pkg._version %>.css?version=<%= pkg.version %>&buildday=<%= grunt.template.today('dd_mm_yyyy') %>",
            "cssURLS": "https://shared.ydstatic.com/gouwuex/ext/css/<%= pkg.name %>_<%= pkg._version %>_s.css?version=<%= pkg.version %>&buildday=<%= grunt.template.today('dd_mm_yyyy') %>",
            "imgPath": "//shared.ydstatic.com/gouwuex/images/extension_<%= pkg._version %>/",
            "imgPathS": "//shared-https.ydstatic.com/gouwuex/images/extension_<%= pkg._version %>/",
            "cssVersion":"<%= grunt.template.today('yyyymmddhhMM') %>",
            "jsFanyiPath": "//shared.ydstatic.com/gouwuex/ext/script/all-packed-utf-8-huihui.js",
            "logHiwifi":"json.vendor = 'hiwifi';",
            "cacheHiwifi":"cache.conf.route = 'hiwifi';",
            "requestHiwifi":"params.vendor = 'hiwifi';"
        }
    };
}