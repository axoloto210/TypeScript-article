#!/bin/bash

# 現在のディレクトリのパスを取得
current_directory=$(pwd)

# ディレクトリを作成する範囲を指定
start_day=3
end_day=25

# 指定された範囲のディレクトリを作成し、index.tsとarticle.mdを作成
for ((day=start_day; day<=end_day; day++)); do
  dir_name="day-$day"
  mkdir "$dir_name"
  touch "$dir_name/index.ts"
  touch "$dir_name/article.md"
done

echo "ファイルの作成が完了しました。"

