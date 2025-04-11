import oracledb
import os
from dotenv import load_dotenv

load_dotenv()

DB_USER = os.getenv("DB_USER", "system")
DB_PASS = os.getenv("DB_PASS", "12345")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "1521")
DB_SERVICE = os.getenv("DB_SERVICE", "XE")

SQLALCHEMY_DATABASE_URI = f"oracle+oracledb://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/?service_name={DB_SERVICE}"

conn = oracledb.connect(
    user= "system",
    password = "12345",
    dsn="localhost:1521/XE"
)


cursor = conn.cursor()
cursor.execute("SELECT * FROM SYSTEM.PRODUCTOS")

rows = cursor.fetchall()

if rows:
    for row in rows:
        print(row)
else:
    print("no hay registro alguno")



cursor.close()
conn.close()