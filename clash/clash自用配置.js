// 国内DNS服务器
const domesticNameservers = [
  "223.5.5.5",
  "119.29.29.29",
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query" // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1", // Cloudflare(主)
  "https://1.0.0.1", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:53",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "114.114.114.114", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "reject": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt", "path": "./ruleset/loyalsoldier/reject.yaml" },
  "icloud": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt", "path": "./ruleset/loyalsoldier/icloud.yaml" },
  "apple": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt", "path": "./ruleset/loyalsoldier/apple.yaml" },
  "speedtest": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Speedtest/Speedtest.yaml", "path": "./ruleset/blackmatrix7/Speedtest.yaml" },
  "emby": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/romulusnow/Rules/refs/heads/main/clash/Emby.yaml", "path": "./ruleset/romulusnow/Emby.yaml" },
  "gemini": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Gemini/Gemini.yaml", "path": "./ruleset/blackmatrix7/Gemini.yaml" },
  "youtube": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml", "path": "./ruleset/blackmatrix7/YouTube.yaml" },
  "google": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml", "path": "./ruleset/blackmatrix7/Google.yaml" },
  "openai": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml", "path": "./ruleset/blackmatrix7/OpenAI.yaml" },
  "proxy": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt", "path": "./ruleset/loyalsoldier/proxy.yaml" },
  "direct": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt", "path": "./ruleset/loyalsoldier/direct.yaml" },
  "private": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt", "path": "./ruleset/loyalsoldier/private.yaml" },
  "gfw": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt", "path": "./ruleset/loyalsoldier/gfw.yaml" },
  "tld-not-cn": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt", "path": "./ruleset/loyalsoldier/tld-not-cn.yaml" },
  "telegramcidr": { ...ruleProviderCommon, "behavior": "ipcidr", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt", "path": "./ruleset/loyalsoldier/telegramcidr.yaml" },
  "twitter": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.yaml", "path": "./ruleset/blackmatrix7/Twitter.yaml" },
  "github": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GitHub/GitHub.yaml", "path": "./ruleset/blackmatrix7/GitHub.yaml" },
  "microsoft": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml", "path": "./ruleset/blackmatrix7/Microsoft.yaml" },
  "cncidr": { ...ruleProviderCommon, "behavior": "ipcidr", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt", "path": "./ruleset/loyalsoldier/cncidr.yaml" },
  "lancidr": { ...ruleProviderCommon, "behavior": "ipcidr", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt", "path": "./ruleset/loyalsoldier/lancidr.yaml" },
  "applications": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt", "path": "./ruleset/loyalsoldier/applications.yaml" }
};
// 规则
const rules = [
  "RULE-SET,applications,全局直连",
  "RULE-SET,private,全局直连",
  "RULE-SET,reject,广告过滤",
  "RULE-SET,icloud,苹果服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,emby,Emby",
  "DOMAIN-KEYWORD,libvio,全局直连",
  "RULE-SET,speedtest,Speedtest",
  "RULE-SET,gemini,Gemini",
  "RULE-SET,youtube,YouTube",
  "RULE-SET,google,Google",
  "RULE-SET,openai,OpenAI",
  "RULE-SET,telegramcidr,Telegram,no-resolve",
  "RULE-SET,github,GitHub",
  "RULE-SET,microsoft,微软服务",
  "RULE-SET,twitter,Twitter",
  "RULE-SET,proxy,节点选择",
  "RULE-SET,gfw,节点选择",
  "RULE-SET,tld-not-cn,节点选择",
  "RULE-SET,direct,全局直连",
  "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve",
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,Google",
  "DOMAIN-SUFFIX,github.io,节点选择",
  "DOMAIN,v2rayse.com,节点选择",
  "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve",
  "MATCH,漏网之鱼"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "http://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  // 基础校验：部分客户端对可选链或特定字段格式敏感，做一层基础保护
  if (!config) config = {};
  
  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "proxies": ["延迟选优", "HK", "SG", "US", "TW", "JP"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Bypass.png"
    },
    {
      ...groupBaseOption,
      "name": "延迟选优",
      "type": "url-test",
      "tolerance": 100,
      "proxies": [],
      "include-all": true,
      "filter": "(?i)港|hk|hongkong|hong kong|台|tw",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png"
    },
    {
      ...groupBaseOption,
      "name": "HK",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)港|hk|hongkong|hong kong",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "SG",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "(?=.*(新加|狮|獅|SG|(?i)Singapore))^((?!(台|日|韩|美)).)*$",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "US",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "(?=.*(美|US|(?i)States|American|us))^((?!(港|台|日|韩|新|澳|巴|加)).)*$",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "TW",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)台|tw|taiwan",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "JP",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)日本|jp|japan",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "MO",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)澳门|MO|macau",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Macao.png"
    },
    {
      ...groupBaseOption,
      "name": "TW home",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "(?=.*(台|TW|(?i)Taiwan))(?=.*(H|家宽|Seed|OP|Ap|TBC|KBT))^((?!(港|日|韩|新|美)).)*$",
      "icon": "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Rounded_Rectangle/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "US home",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "(?=.*(美|US|(?i)States|American))(?=.*(ATT|Haw|RCN|WAVE|COX|Link|Inter|Fro|家宽))^((?!(港|台|日|韩|新)).)*$",
      "icon": "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Rounded_Rectangle/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "低倍率",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "filter": "^(?!.*traffic)(?i).*(倍率[:：]?\\s*0\\.[1-5]|0\\.[1-5]\\s*[x倍]?)",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Dark/x0.3.png"
    },
    {
      ...groupBaseOption,
      "name": "Google",
      "type": "select",
      "proxies": ["节点选择", "HK", "SG", "TW"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    },
    {
      ...groupBaseOption,
      "name": "Speedtest",
      "type": "select",
      "proxies": ["节点选择", "Telegram", "Emby", "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Speedtest.png"
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "proxies": ["节点选择", "HK", "SG", "JP"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram_X.png"
    },
    {
      ...groupBaseOption,
      "name": "Emby",
      "type": "select",
      "proxies": ["节点选择", "低倍率", "HK", "SG", "JP", "US", "TW"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Emby.png"
    },
    {
      ...groupBaseOption,
      "name": "YouTube",
      "type": "select",
      "proxies": ["节点选择", "HK", "MO", "JP", "Google"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png"
    },
    {
      ...groupBaseOption,
      "name": "OpenAI",
      "type": "select",
      "proxies": ["节点选择", "US", "JP", "US home"],
      "icon": "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/openai.png"
    },
    {
      ...groupBaseOption,
      "name": "Gemini",
      "type": "select",
      "proxies": ["节点选择", "SG","Google", "JP", "US home"],
      "icon": "https:\/\/raw.githubusercontent.com\/lige47\/QuanX-icon-rule\/main\/icon\/04ProxySoft\/gemini(1).png"
    },
    {
      ...groupBaseOption,
      "name": "Twitter",
      "type": "select",
      "proxies": ["节点选择", "HK", "MO", "JP", "US"],
      "icon": "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/x.png"
    },
    {
      ...groupBaseOption,
      "name": "国外媒体",
      "type": "select",
      "proxies": ["节点选择", "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Media.png"
    },
    {
      ...groupBaseOption,
      "name": "GitHub",
      "type": "select",
      "proxies": ["节点选择", "TW home", "微软服务", "HK", "US", "TW"],
      "icon": "https://www.clashverge.dev/assets/icons/github.svg"
    },
    {
      ...groupBaseOption,
      "name": "微软服务",
      "type": "select",
      "proxies": ["全局直连", "TW home", "SG", "HK", "US", "TW"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "select",
      "proxies": ["HK", "SG", "US", "TW", "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png"
    },
    {
      ...groupBaseOption,
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png"
    },
    {
      ...groupBaseOption,
      "name": "全局直连",
      "type": "select",
      "proxies": ["DIRECT", "节点选择"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "全局拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Reject.png"
    },
    {
      ...groupBaseOption,
      "name": "漏网之鱼",
      "type": "select",
      "proxies": ["节点选择", "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}
