#!/bin/bash

# 現在のディレクトリのパスを取得
current_directory=$(pwd)

# ディレクトリを作成する範囲を指定
start_day=2
end_day=25

# 指定された範囲のディレクトリを作成
for ((day=start_day; day<=end_day; day++)); do
  mkdir "day-$day"
done

echo "ディレクトリの作成が完了しました。"

