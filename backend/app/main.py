from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins = [ # Allows local and production origins
        "http://localhost:3000",
        "https://pauliej.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/quote")
async def get_quote():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get('https://api.kanye.rest')
            response.raise_for_status()
            quote = response.json()
            return quote
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
