module.exports = {

  defaults: {
    CONFIG_SERVER_URIS:
      process.env.CONFIG_SERVER_URIS || "http://config.platform:9000",
    EUREKA_SERVER_URLS:
      process.env.EUREKA_SERVER_URLS ||
      "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/"
  },

  apps: [
    {
      name: "config-server",
      cwd: __dirname,
      script: "java",
      args: "-jar ./config-server/target/Config-Server-1.0.0.jar",
      log_file: "./logs/config-server.log",
      autorestart: true,
      max_restarts: 10,
      env: {
        CONFIG_SERVER_URIS:
          process.env.CONFIG_SERVER_URIS || "http://config.platform:9000",
        EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/",
        EUREKA_CLIENT_SERVICEURL_DEFAULTZONE:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/",
        EUREKA_SERVER_URLS:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/"
      }
    },
    {
      name: "service-registry",
      cwd: __dirname,
      script: "java",
      args: "-jar ./service-registry/target/Service-Registry-1.0.0.jar --server.port=9001",
      log_file: "./logs/service-registry.log",
      autorestart: true,
      max_restarts: 10,
      env: {
        CONFIG_SERVER_URIS:
          process.env.CONFIG_SERVER_URIS || "http://config.platform:9000",
        VMID: process.env.VMID || process.env.HOSTNAME,
        vmid: process.env.vmid || process.env.VMID || process.env.HOSTNAME,
        EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/",
        EUREKA_CLIENT_SERVICEURL_DEFAULTZONE:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/",
        EUREKA_SERVER_URLS:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/"
      }
    },
    {
      name: "api-gateway",
      cwd: __dirname,
      script: "java",
      args: "-jar ./api-gateway/target/Api-Gateway-1.0.0.jar --server.port=7000",
      log_file: "./logs/api-gateway.log",
      autorestart: true,
      max_restarts: 10,
      env: {
        CONFIG_SERVER_URIS:
          process.env.CONFIG_SERVER_URIS || "http://config.platform:9000",
        EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/",
        EUREKA_CLIENT_SERVICEURL_DEFAULTZONE:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/",
        EUREKA_SERVER_URLS:
          process.env.EUREKA_SERVER_URLS ||
          "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/"
      }
    }
  ]
}
