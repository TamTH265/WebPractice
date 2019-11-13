const Table = require('cli-table');
const rp = require('request-promise');
const cheerio = require('cheerio');

const table = new Table({
  head: ['username', 'likes_received', 'passed_challengers'],
  colWidths: [20, 20, 20]
})

const options = {
  uri: `https://www.freecodecamp.org/forum/directory_items?period=weekly&order=likes_received`,
  json: true
}

const getGeneralData = async () => {
  const usersData = [];
  const generalData = await rp(options);
  for (let user of generalData.directory_items) {
    const userName = user.user.username;
    const likes_received = user.likes_received;
    usersData.push([userName, likes_received]);
  }
  return usersData;
}

const getNumOfChallengersAndPassedToUsersData = async () => {
  const usersData = await getGeneralData();

  function innerOptions(index) {
    return {
      uri: `https://www.freecodecamp.org/${usersData[index][0]}`,
      transform: (body) => cheerio.load(body)
    }
  }

  function doPromise(index) {
    return rp(innerOptions(index));
  }

  const usersDataLength = usersData.length;
  let tmp = [];
  for (let i = 0; i < usersDataLength; i++) {
    tmp.push(() => doPromise(i));
  }
  Promise.all(tmp).then(($) => {
    for (let i = 0; i < usersDataLength; i++) {
      console.log($[i]('tbody tr').text());
    }
  })
  return usersData;
}

const putDataToTable = async () => {
  const usersData = await getNumOfChallengersAndPassedToUsersData();
  for (let user of usersData) {
    table.push(user);
  }
  return table;
}

const renderTable = async () => {
  const table = await putDataToTable();
  console.log('\n');
  console.log(table.toString());
}

renderTable();
