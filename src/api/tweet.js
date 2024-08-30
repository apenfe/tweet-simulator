import { v4 as uuidv4 } from "uuid";
import { size } from "lodash";
import { TWEETS } from "../utils/constants";

export function saveTweetApi(tweet, username) {

    const tweets = getTweetsApi();

    if (size(tweets) === 0) {

        const tweetTemp = [{
            id: uuidv4(),
            tweet,
            username,
            createdAt: new Date()
        }];

        localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));

    } else {

        const tweetTemp = {
            id: uuidv4(),
            tweet,
            username,
            createdAt: new Date()
        };

        tweets.push(tweetTemp);

        localStorage.setItem(TWEETS, JSON.stringify(tweets));

    }

}

export function getTweetsApi() {

    const tweets = localStorage.getItem(TWEETS);

    if (tweets) {
        return JSON.parse(tweets);
    }

    return [];
}