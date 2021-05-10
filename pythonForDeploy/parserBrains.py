import requests
from bs4 import BeautifulSoup
from urllib.request import *
import time
import os.path


def get_html(url):
    r = requests.get(url)
    if r.ok:
        return r.text
    else:
        print(r.status_code)


def get_data(html):
    global li_img
    soup = BeautifulSoup(html, 'lxml')
    lis = soup.find_all('li', class_='content-list__item')

    for index, li in enumerate(lis):
        try:
            name = li.find('h2').text.strip()
        except:
            name = 'No Name'

        try:
            li_img = li.find('img', class_='tag__image tag__image_bg')['src']
        except:
            li_img = 'No IMG'

        if name.find('/') == -1:
            if li_img != 'No IMG':
                urlretrieve(li_img, name + '.jpg')
                print(str(index), 'download ok')
            else:
                print('No Img ;(')
        else:
            if li_img != 'No IMG':
                name = 'bad_img' + str(index)
                urlretrieve(li_img, name + '.jpg')
                print('Bad IMG download ok')
            else:
                print('No Img ;(')
        url = 'http://localhost:8794/api/brain'
        headers = {
            'Authorization': 'Bearer TOKEN_HERE'  # TOKEEEEEEEEN HEREEEEEEEEE!!!
        }
        print(os.path.exists(name + '.jpg'))
        if not os.path.exists(name + '.jpg'):
            data = {'name': (None, name), 'description': (None, 'Упс, администратор еще не заполнил описание Брейна.'),
                    'img': open('default.png', 'rb')}
        else:
            data = {'name': (None, name), 'description': (None, 'Упс, администратор еще не заполнил описание Брейна.'),
                    'img': open(name + '.jpg', 'rb')}

        r = requests.post(url, headers=headers, files=data)
        print(r.text)


def main():
    pattern = 'https://qna.habr.com/tags/by_watchers?page={}'
    for i in range(1, 61):
        url = pattern.format(str(i))
        get_data(get_html(url))


start_time = time.time()
main()
print("--- %s seconds ---" % (time.time() - start_time))
