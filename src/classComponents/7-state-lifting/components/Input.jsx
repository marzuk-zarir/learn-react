export default function Input({ scale, temperature, setTemperature }) {
    return (
        <div>
            <label>Enter temperature in {scale} </label>
            <input
                type="text"
                value={temperature}
                onChange={(e) => setTemperature(scale, e.target.value)}
            />
        </div>
    )
}
