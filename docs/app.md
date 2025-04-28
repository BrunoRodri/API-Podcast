# Podcast Manager


### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episodios de podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
  - Listar os episodios de podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor, corrida, esporte]
  - Filtrar episodios por nome de podcast


## Como

#### Feature:
 Listar os episodios de podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em uma api rest (json) o 
nome do podcast, nome do episodio, imagem de capa, link, categoria

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId:"pQSuQmUfS30",
    category: ["saúde", "fitness", "esporte"]
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    category: ["corrida", "esporte"]
  }
]
```
