# check for flags
while getopts ":t:" opt; do
  case $opt in
	  t)
	    tag=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

# build image
docker build -t bitloops/bitloops-engine:$tag .

# push image
docker push bitloops/bitloops-engine:$tag