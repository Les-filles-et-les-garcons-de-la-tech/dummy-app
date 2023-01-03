package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/which", func(w http.ResponseWriter, r *http.Request) {
		agencies := []string{"Aix-en-Provence", "Toulouse", "Paris"}
		fmt.Fprint(w, agencies[rand.Intn(len(agencies))])
	})

	http.ListenAndServe(":" + os.Getenv("PORT"), nil)
}