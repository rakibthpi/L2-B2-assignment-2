import dotend from 'dotenv'
import path from 'path'

dotend.config({ path: path.join(process.cwd(), '.env') })

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url_local: process.env.DATABASE_URL_LOCAL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
}
