package main

import (
	"fmt"
)

func main() {

	//arr1 := []int{1, 2, 3, 9}
	//arr2 := []int{1, 2, 4, 4}
	//res := hasPairWithSum2(arr2, 8)
	res := FindChanel(5, 2)
	fmt.Println(res)
}

func hasPairWithSum(arr []int, sum int) {
	for i := 0; i < len(arr); i++ {
		for j := 0; j < len(arr); j++ {
			if arr[i]+arr[j] == sum {
				fmt.Println(true)
				return
			}

		}
	}
	fmt.Println(false)
}

func hasPairWithSum2(arr []int, sum int) bool {
	mySet := HashTable{}
	len := len(arr)

	for i := 0; i < len; i++ {
		complement := sum - arr[i]
		if mySet.Has(complement) {
			fmt.Println(mySet.Get(complement), i)
			return true
		}

		mySet.Set(arr[i], i)
		fmt.Println("hash table : ", mySet.Items)
	}

	return false
}

type HashTable struct {
	Items map[int]int
}

// the hash() private function uses the famous Horner's method
// to generate a hash of a string with O(n) complexity
func hash(k int) int {
	key := fmt.Sprintf("%d", k)
	h := 0
	for i := 0; i < len(key); i++ {
		h = 31*h + int(key[i])
	}
	return h
}

func (h *HashTable) Has(key int) (result bool) {
	idx := hash(key)
	for item, _ := range h.Items {
		if item == idx {
			return true
		}
	}
	return false
}

func (h *HashTable) Set(key int, value int) {
	i := hash(key)
	if h.Items == nil {
		h.Items = make(map[int]int)
	}
	h.Items[i] = value
	return
}

func (h *HashTable) Get(key int) (value int) {
	idx := hash(key)
	for item, v := range h.Items {
		if item == idx {
			return v
		}
	}
	return -1
}

func FindChanel(n int, k int) int {
	var chl = make([]int, n)
	for i := 0; i < n; i++ {
		chl[i] = i + 1
	}

	for {
		chl = append(chl[:k-1], chl[k+2:]...)
		fmt.Println(chl)
		if len(chl) == 1 {
			break
		}
	}

	return chl[0]
}
