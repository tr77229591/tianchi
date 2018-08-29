define({ "api": [
  {
    "type": "get",
    "url": "/bid/fetchbid/:id",
    "title": "获得招标",
    "description": "<p>获得招标信息</p>",
    "name": "getbid",
    "group": "Bid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>招标ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/bid/fetchbid/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/bid.js",
    "groupTitle": "Bid"
  },
  {
    "type": "post",
    "url": "/bid/newbid",
    "title": "新增招标",
    "description": "<p>发起招标</p>",
    "name": "newbid",
    "group": "Bid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "startDate",
            "description": "<p>发起时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endDate",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project",
            "description": "<p>所属项目</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "involvedFIs",
            "description": "<p>参与的金融机构列表</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offers",
            "description": "<p>金融机构报价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "winnerFI",
            "description": "<p>中标银行</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/bid/newbid"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/bid.js",
    "groupTitle": "Bid"
  },
  {
    "type": "post",
    "url": "/enterprises/newenterprise",
    "title": "新增企业",
    "description": "<p>新增一个企业</p>",
    "name": "addCompany",
    "group": "Compangy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "legalPersonality",
            "description": "<p>法人代表</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registeredCaptial",
            "description": "<p>注册资本</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dateOfEstablishment",
            "description": "<p>成立日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "businessScope",
            "description": "<p>营业范围</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "basicFIName",
            "description": "<p>基本开户银行名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "basicFIAccount",
            "description": "<p>基本开户银行账号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/enterprises/newenterprise"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/enterprises.js",
    "groupTitle": "Compangy"
  },
  {
    "type": "get",
    "url": "/login",
    "title": "企业登录",
    "description": "<p>企业登录</p>",
    "name": "login",
    "group": "Compangy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>企业密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/enterprises/login/:name/:password"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/enterprises.js",
    "groupTitle": "Compangy"
  },
  {
    "type": "get",
    "url": "/login",
    "title": "企业查询",
    "description": "<p>企业查询</p>",
    "name": "querryCompany",
    "group": "Compangy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>企业ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/enterprises/fetchcompany/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/enterprises.js",
    "groupTitle": "Compangy"
  },
  {
    "type": "get",
    "url": "/balancesheet/fetchbalancesheet/:id",
    "title": "获得资产负债表",
    "description": "<p>获得资产负债表信息</p>",
    "name": "getbalancesheet",
    "group": "balancesheet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lrfs",
            "description": "<p>法人代表家族史</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/balancesheet/fetchbalancesheet/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/balancesheet.js",
    "groupTitle": "balancesheet"
  },
  {
    "type": "post",
    "url": "/balancesheet/newbalancesheet",
    "title": "新增资产负债表",
    "description": "<p>新增资产负债表</p>",
    "name": "newbalancesheet",
    "group": "balancesheet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lrfs",
            "description": "<p>法人代表家族史</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "actualControllers",
            "description": "<p>实际控制人列表</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/balancesheet/newbalancesheet"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/balancesheet.js",
    "groupTitle": "balancesheet"
  },
  {
    "type": "post",
    "url": "/ddr/newddr",
    "title": "新增尽职报告调查",
    "description": "<p>新增尽职报告调查</p>",
    "name": "newddr",
    "group": "ddr",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "balanceSheet",
            "description": "<p>资产负债表</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>其他描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/ddr/newddr"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/ddr.js",
    "groupTitle": "ddr"
  },
  {
    "type": "get",
    "url": "/ddr/fetchddr/:name",
    "title": "查询尽职报告调查",
    "description": "<p>查询尽职报告调查</p>",
    "name": "querryddr",
    "group": "ddr",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>资产负债ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/ddr/fetchddr/:name"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/ddr.js",
    "groupTitle": "ddr"
  },
  {
    "type": "get",
    "url": "/finins/login/:name/:password",
    "title": "登录金融机构",
    "description": "<p>登录金融机构</p>",
    "name": "loginfin",
    "group": "fin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>金融机构名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>金融机构密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/finins/login/:name/:password"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/finins.js",
    "groupTitle": "fin"
  },
  {
    "type": "post",
    "url": "/finins/newfin",
    "title": "新增金融机构",
    "description": "<p>新增金融机构</p>",
    "name": "newfin",
    "group": "fin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>金融机构名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>金融机构地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>金融机构密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/finins/newfin"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/finins.js",
    "groupTitle": "fin"
  },
  {
    "type": "get",
    "url": "/finins/fetchfinins/:id",
    "title": "查询金融机构",
    "description": "<p>查询金融机构</p>",
    "name": "querryfin",
    "group": "fin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>金融机构ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/finins/fetchfinins/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/finins.js",
    "groupTitle": "fin"
  },
  {
    "type": "get",
    "url": "/offer/newoffer",
    "title": "提交金融机构报价",
    "description": "<p>提交金融机构</p>",
    "name": "newoffer",
    "group": "offer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loanAmount",
            "description": "<p>放款金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "interestRate",
            "description": "<p>利率</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/offer/newoffer"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/offer.js",
    "groupTitle": "offer"
  },
  {
    "type": "get",
    "url": "/offer/fetchoffer/:id",
    "title": "查询金融机构报价",
    "description": "<p>查询金融机构</p>",
    "name": "querryoffer",
    "group": "offer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>金融机构报价ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/offer/fetchoffer/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/offer.js",
    "groupTitle": "offer"
  },
  {
    "type": "post",
    "url": "/project/newproject",
    "title": "新增项目",
    "description": "<p>新增项目</p>",
    "name": "newproject",
    "group": "project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>项目简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coreFirm",
            "description": "<p>核心企业列表</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updownFirm",
            "description": "<p>上下游企业列表</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "progress",
            "description": "<p>项目进展</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bidInfo",
            "description": "<p>招标信息</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "winnerFI",
            "description": "<p>中标金融机构</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "creditLimit",
            "description": "<p>授信额度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "usedLimit",
            "description": "<p>已用额度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "capitalFlow",
            "description": "<p>资金流信息（时间+信息）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cargoFlow",
            "description": "<p>货物流信息（时间+信息）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ddr",
            "description": "<p>中标银行</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/project/newproject"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/project.js",
    "groupTitle": "project"
  },
  {
    "type": "get",
    "url": "/project/fetchproject/:name",
    "title": "查询项目",
    "description": "<p>查询项目</p>",
    "name": "querryproject",
    "group": "project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/project/fetchproject/:name"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/project.js",
    "groupTitle": "project"
  }
] });
