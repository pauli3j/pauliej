from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import httpx

app = FastAPI()

file_path = "aba9abcc-ef4b-422a-b401-044dcea210c6.txt"

# Configure CORS
origins = [
    "pauliej.com",
    "localhost:3000",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "https://localhost",
    "https://localhost:3000",
    "https://localhost:8000",
    "https://pauliej.com",
    "https://www.pauliej.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specified origins
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

@app.get("/aba9abcc-ef4b-422a-b401-044dcea210c6.txt")
async def get_file():
    return FileResponse(path=file_path, filename=file_path, media_type='text/txt')