const submitBtn = document.querySelector("#submit");
const resultContainer = document.querySelector(".result-content");

let apiKey = `ema_live_nCLyYIT6mJNBAkZmx1oFaE5DUU9U33tPY7QqixXE`;

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  let email = document.querySelector("#email").value;
  let loading = document.querySelector(".loading");
  loading.innerHTML = `<img src="assets/loading.svg" alt="loading" id="loading" width="30px">`;
  let uri = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;

  let response = await fetch(uri);
  result = await response.json();
  loading.innerHTML = "";

  resultContainer.innerHTML = `
    	<p><b>Email Address:</b> ${result.email}</p>
    	<p><b>State:</b> ${result.state}</p>
    	<p><b>Reason:</b> ${result.reason}</p>
    	<p><b>Domain:</b> ${result.domain}</p>
    	<p><b>User:</b> ${result.user}</p>
    	<p><b>Tag:</b> ${result.tag}</p>
    	<p><b>Format Valid:</b> ${result.format_valid}</p>
    	<p><b>Mx Valid:</b> ${result.mx_found}</p>
    	<p><b>Smtp Valid:</b> ${result.smtp_check}</p>
    	<p><b>Score:</b> ${result.score}</p>
    	<p style="padding-bottom: 10px"><b>Disposable Email Provider:</b> ${result.disposable}</p>
		`;
});
