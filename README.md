# M A P D R (Hyper4Saken) 🤘

![MAPDR](https://github.com/hyper4saken/ohif-orthanc-pacs/blob/main/ohif/config/logo.png)

# OHIF v3 with Orthanc(PostgresDB) with Authentik for Auth and Nginx Proxy Manager for Proxy

## Intro:
> **🩻 Ohif v3:** (OHIF) Viewer is an open source, web-based, medical imaging platform.

> **📀 Orthanc:** Its free and open-source, lightweight DICOM server for medical imaging.

> **🐘 PostgreSQL:** It is a powerful open-source relational database management system known for its reliability, extensibility, and advanced features.

> **🔐 Authentik:** It is an open-source authentication and authorization server that provides secure access control and identity management for web applications.

> **🌐 Nginx Proxy Manager:** It is a simple yet powerful web-based tool for managing Nginx proxy servers, enabling easy configuration and management of reverse proxies and SSL/TLS termination.

---
## 🤔 Want to know how it looks like. Here is the Demo Video
[![DEMO VIDEO](https://img.youtube.com/vi/2Sde7z1E_y8/0.jpg)](https://www.youtube.com/watch?v=Y2Sde7z1E_y8)

### Create new docker network `proxy`

```bash
docker network create proxy
```

### Clone This Repo

```bash
git clone https://github.com/hyper4saken/ohif-orthanc.git
cd ohif-orthanc-pacs
```

### File Structure

```bash
├── authentik
│   ├── certs
│   ├── custom-templates
│   ├── database
│   ├── media
│   │   └── public
│   │       ├── favicon.svg
│   │       ├── flow-backgrounds
│   │       │   └── star-wars-poster-4k-af-1920x1080.jpg
│   │       └── logo.png
│   └── redis
├── docker-compose.yml
├── ohif
│   ├── config
│   │   ├── logo.png
│   │   └── ohif.js
│   └── nginx
│       ├── default-ohif-nginx.conf
│       └── ohif-nginx.conf
├── orthanc
│   ├── config
│   │   ├── orthanc.json
│   │   └── postgresql.json
│   ├── database
│   └── dicomImages
├── proxy
└── README.md
```

### Set `.env` variable for Authentik

```bash
echo "PG_PASS=$(openssl rand 36 | base64)" >> .env
echo "AUTHENTIK_SECRET_KEY=$(openssl rand 60 | base64)" >> .env
```

### Spin up containers

```bash
docker-compose up -d
```
