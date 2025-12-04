function calculateMinCost() {
  //your code here
	 const input = document.getElementById("rope-lengths").value;
    const result = document.getElementById("result");

    if (!input.trim()) {
        result.innerHTML = "Please enter rope lengths!";
        return;
    }

    // Convert "4, 2, 7" → [4,2,7]
    let arr = input.split(",")
                   .map(n => Number(n.trim()))
                   .filter(n => !isNaN(n));

    if (arr.length < 2) {
        result.innerHTML = "Enter at least two rope lengths!";
        return;
    }

    let cost = 0;

    // Keep connecting ropes until only one remains
    while (arr.length > 1) {
        arr.sort((a, b) => a - b); // smallest two ropes

        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        arr.push(sum); // add new combined rope back
    }

    result.innerHTML = "Minimum Cost = " + cost;
  
}  
