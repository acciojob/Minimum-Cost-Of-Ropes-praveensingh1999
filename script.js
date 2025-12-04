function calculateMinCost() {
  //your code here
	 const input = document.getElementById("rope-lengths").value;
    const result = document.getElementById("result");

    if (!input.trim()) {
        result.innerHTML = "Please enter rope lengths!";
        return;
    }

    // Convert comma-separated string → numbers array
    let arr = input.split(",")
                   .map(n => Number(n.trim()))
                   .filter(n => !isNaN(n));

    if (arr.length === 0) {
        result.innerHTML = "Invalid input!";
        return;
    }

    let cost = 0;

    // Repeat until only one rope remains
    while (arr.length > 1) {
        // Sort to get smallest two
        arr.sort((a, b) => a - b);

        let first = arr.shift();   // smallest
        let second = arr.shift();  // second smallest

        let sum = first + second;
        cost += sum;

        arr.push(sum); // Add new combined rope
    }

    result.innerHTML = "Minimum Cost = " + cost;
  
  
  
}  
