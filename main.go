package main

import (
	"log"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./frontend/build", true)))
	r.GET("/event", func(c *gin.Context) {
		log.Printf("%v", c.Request.Body)
	})
	r.POST("/event", func(c *gin.Context) {
		jsonData, _ := c.GetRawData()
		log.Printf("%v", string(jsonData))
	})

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080"
}
