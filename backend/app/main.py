from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins = [ # Allows local and production origins
        "http://localhost",
        "http://localhost:3000",
        "http://localhost:8000",
        "https://pauliej.com",
        "https://pauliej.com:8000",
        "https://pauliej.com:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/quote")
async def get_quote():
    async with httpx.AsyncClient() as client:
        response = await client.get('https://api.kanye.rest')
        quote = response.json()
        return quote
