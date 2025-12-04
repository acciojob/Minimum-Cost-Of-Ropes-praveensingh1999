function calculateMinCost() {
    const input = document.getElementById("rope-lengths").value;
    const result = document.getElementById("result");

    if (!input.trim()) {
        result.innerHTML = "Please enter rope lengths!";
        return;
    }

    let arr = input.split(",")
                   .map(n => Number(n.trim()))
                   .filter(n => !isNaN(n));

    if (arr.length < 2) {
        result.innerHTML = "Enter at least two rope lengths!";
        return;
    }

    let cost = 0;

    while (arr.length > 1) {
        arr.sort((a, b) => a - b);

        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        arr.push(sum);
    }

    result.innerHTML = "Minimum Cost = " + cost;
}
