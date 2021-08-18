const crypto = document.querySelector('#cryptoPrice')
const button = document.querySelector('button')


const NewCrypto = async () => {

	const cryptoPrice = await getCprice()
	const newLI = document.createElement('LI')
	newLI.append(cryptoPrice)
	crypto.append(newLI)

}

const getCprice = async () => {

	try{

	const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
	return res.data.ticker.price
	


} catch (e) {
	return "No Price Availabe...sorrry"
}
}

  button.addEventListener('click', NewCrypto)