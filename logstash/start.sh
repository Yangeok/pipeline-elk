docker run -it  -v "/$(pwd)"/data:/usr/share/logstash/data \
                -v "/$(pwd)"/csv.conf:/usr/share/logstash/config/csv.conf \
                -v "/$(pwd)"/logstash.yml:/usr/share/logstash/config/logstash.yml \
                docker.elastic.co/logstash/logstash:6.4.0 bash