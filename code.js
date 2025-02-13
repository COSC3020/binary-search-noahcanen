function binarySearch(list, element) {
    var low = 0;
    var high = list.length - 1;
    while (high >= low)
    {
        var mid = low + Math.floor((high - low) / 2);
        if (list[mid]==element){return mid;}
        if (list[mid] > element){high = mid - 1;}
        else{low = mid + 1;}
    }
    return -1;
}
