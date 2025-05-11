---
title: "Docker commands"
description: "A collection of some useful docker commands that are used quite often."
language: "javascript"
---

## To list all containers (including stopped)


```js
docker ps -a
```

## To see logs of a container

```js
docker logs <container_id>
```


## To execute a command in running container

```js
docker exec -it <container_id> bash
```
## To copy a file from container to host
```js
docker cp <container_id>:/path/in/container ./local/path
```

## To see the live resource usage (CPU, memory)
```js
docker stats
```

## To rebuild your Docker services without using any cache from previous builds

```js
docker-compose build --no-cache
```

## To clean up everything (containers, images, volumes, networks)
```js
docker system prune -a
```
