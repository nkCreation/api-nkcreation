cd api-nkcreation
pm2 del --silent apinkcreation
pm2 start npm --name apinkcreation -- run start