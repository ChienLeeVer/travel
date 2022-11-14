export default {
        changeCity (state, newCity) {
            state.city = newCity
            try {
                localStorage.setItem('city', state.city)
            } catch(e) {

            }

        }
    }