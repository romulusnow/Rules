// 国内DNS服务器
const domesticNameservers = [
  "223.5.5.5",
  "119.29.29.29",
  "https://dns.alidns.com/dns-query",
  "https://doh.pub/dns-query",
  "https://doh.360.cn/dns-query"
];

// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query",
  "https://1.0.0.1/dns-query",
  "https://208.67.222.222/dns-query",
  "https://208.67.220.220/dns-query",
  "https://194.242.2.2/dns-query",
  "https://194.242.2.3/dns-query"
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
  if (!config) config = {};

  // 1. 获取来自 Sub-Store、且保持了原始排序的全部节点名称
  const rawProxies = config.proxies || [];
  const allProxyNames = rawProxies.map(p => p.name);

  // 通用过滤函数（带有指定源列表）
  const filterList = (sourceList, regex) => {
    const matched = sourceList.filter(name => regex.test(name));
    // 若匹配结果为空，返回原列表作为 fallback 容错，防止策略组报空错误
    return matched.length > 0 ? matched : sourceList;
  };

  // 全局节点过滤辅助函数
  const getFilterNodes = (regex) => filterList(allProxyNames, regex);

  // 2. 精准定义各地区节点列表
  const hkNodes = getFilterNodes(/香港|港|HK|Hong Kong|HongKong/i);
  const sgNodes = getFilterNodes(/新加坡|狮城|獅城|SG|Singapore/i);
  
  // 精准 US 匹配（使用 \b 单词边界，防止匹配 Australia, Russia 等）
  const usNodes = getFilterNodes(/(?:美国|美|United States|\bUS\b)/i);
  
  const twNodes = getFilterNodes(/台湾|台灣|台|TW|Taiwan/i);
  const jpNodes = getFilterNodes(/^(?!.*(?:尼日利亚|NG|Nigeria)).*(?:日本|日|\bJP\b|Japan)/i);
  
  // 精准 MO 匹配（使用 \b 单词边界，防止匹配包含 mo 的其他字符串）
  const moNodes = getFilterNodes(/(?:澳门|澳門|\bMO\b|Macau)/i);

  // 3. 嵌套筛选家宽节点：直接在对应地区的节点列表结果上做二次正则过滤
  const twHomeNodes = filterList(twNodes, /家宽|Seed|OP|Ap|TBC|KBT/i);
  const usHomeNodes = filterList(usNodes, /ATT|Haw|RCN|WAVE|COX|Link|Inter|Fro|家宽/i);

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 4. 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "proxies": ["延迟选优", "HK", "SG", "US", "TW", "JP", ...allProxyNames],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Bypass.png"
    },
    {
      ...groupBaseOption,
      "name": "延迟选优",
      "type": "url-test",
      "tolerance": 100,
      "proxies": getFilterNodes(/香港|港|HK|Hong Kong|HongKong|台湾|台灣|台|TW|Taiwan/i),
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png"
    },
    {
      ...groupBaseOption,
      "name": "HK",
      "type": "select",
      "proxies": hkNodes,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "SG",
      "type": "select",
      "proxies": sgNodes,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "US",
      "type": "select",
      "proxies": usNodes,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "TW",
      "type": "select",
      "proxies": twNodes,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "JP",
      "type": "select",
      "proxies": jpNodes,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "MO",
      "type": "select",
      "proxies": moNodes,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Macao.png"
    },
    {
      ...groupBaseOption,
      "name": "TW home",
      "type": "url-test",
      "tolerance": 100,
      "proxies": twHomeNodes,
      "icon": "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Rounded_Rectangle/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "US home",
      "type": "url-test",
      "tolerance": 100,
      "proxies": usHomeNodes,
      "icon": "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Rounded_Rectangle/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "低倍率",
      "type": "select",
      "proxies": getFilterNodes(/0\.[1-5]/i),
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
      "proxies": ["节点选择", "SG", "Google", "JP", "US home"],
      "icon": "https://raw.githubusercontent.com/lige47/QuanX-icon-rule/main/icon/04ProxySoft/gemini(1).png"
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

  // 5. 覆盖原配置中的规则与规则集
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  return config;
}
